import './index.css'

function login(){
  return(
    <div className='login'>
      <input className='userName' type="text" placeholder='username'/>
      <input className='passWord' type="text" placeholder='password'/>
      <button className='submitBtn'>Submit</button>
    </div>
  )
}
export default login;