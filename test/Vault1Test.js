const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vault 1", () => {

	let Vault1;
	let vault1Token;
	let bottleCapsFactory;
	let bottleCapsToken;
	let addr1;
	let addr2;

	beforeEach(async () => {
		[owner, addr1, addr2] = await ethers.getSigners();

		bottleCapsFactory = await ethers.getContractFactory("BottleCaps", owner);
		bottleCapsToken = await bottleCapsFactory.deploy()
		await bottleCapsToken.deployed();

		Vault1 = await ethers.getContractFactory("Vault1", owner);
		vault1Token = await Vault1.deploy(bottleCapsToken.address);

		await vault1Token.deployed();
	});


	describe("Deployment", async function () {
		it("Should assign the total supply of tokens to the owner", async function () {
			const ownerBalance = await bottleCapsToken.balanceOf(owner.address);
			expect(await bottleCapsToken.totalSupply()).to.equal(ownerBalance);
		});
	});

	describe("#deposit", async function() {
		it("should take in a deposit amount", async function() {
			await bottleCapsToken.connect(owner).transfer(addr1.address, 3); // Have some caps to transfer

			await bottleCapsToken.connect(addr1).approve(vault1Token.address, 1);
			await vault1Token.connect(addr1).deposit(1);

			expect(await vault1Token.balanceOf(addr1.address)).to.eq(1);
			// expect(await bottleCapsToken.balanceOf(addr1.address)).to.eq(originalAddr1Balance - 1);
		})
	});

	// describe("#withdraw", async function() {
	// 	it("should allow users to widthdraw <= what's deposited", async function() {
	// 		await bottleCapsToken.transfer(addr1.address, 10);

	// 		let originalAddr1Balance = await vault1Token.balanceOf(addr1.address);

	// 		await vault1Token.connect(addr1).deposit({
	// 			value: ethers.utils.parseEther("1.0")
	// 		});
	// 		await vault1Token.connect(addr1).withdraw(1);
			
	// 		expect(await vault1Token.balanceOf(addr1.address)).to.eq(originalAddr1Balance);
	// 	})
	// });
});
