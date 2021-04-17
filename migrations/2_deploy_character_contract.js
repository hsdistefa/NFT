const NFTSimple = artifacts.require('NFTSimple')

const KOVAN_VRF_COORDINATOR = '0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9'
const KOVAN_LINKTOKEN = '0xa36085f69e2889c224210f603d836748e7dc0088'
const KOVAN_KEYHASH = '0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4'

const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
const RINKEBY_LINKTOKEN = '0x01be23585060835e02b77ef475b0cc51aa1e0709'
const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'


module.exports = async (deployer, network, [defaultAccount]) => {
    await deployer.deploy(
        NFTSimple,
        RINKEBY_VRF_COORDINATOR,
        RINKEBY_LINKTOKEN,
        RINKEBY_KEYHASH
    )
    let dnd = await NFTSimple.deployed()
}