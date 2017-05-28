/* Slicing */

//It won't work, user.contact denotes number
{user.contact.slice(2)} 

//It will work
<Text style={{color: "gray", fontWeight: "bold"}} >{(""+user.contact).slice(2)} </Text>	