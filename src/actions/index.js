let allUserArray=[
  { name:"Sha1", desc:"Desc1", time:"Time1" },
  { name:"Sha2", desc:"Desc2", time:"Time2" },
  { name:"Sha3", desc:"Desc3", time:"Time3" }
]


export const getAllUsers = () => {

  return({
    type:'GET_ALL_USERS',
    payload: allUserArray
  })

}
