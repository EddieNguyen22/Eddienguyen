const FormInput = ({name,password,password2,email}) => {
  return (
    <div className="form-input">
      <p className="form-title">
        {name}
        {password}
        {password2}
        {email}</p>
      <input type="text" />
    </div>
  )
}

const LoginForm = () => {
    return (
    <div>
        <div className="form-bellow">
        <FormInput name="Usersname"/>
        <FormInput password="Password(4 characters minimum)"/>
        <FormInput password2="Password Confirm"/>
        <FormInput email="Email"/>
      </div>
      <p className="form-title">By clicking the "Sign up" button bellow,I certify that I have read and argee to the TMDB terms of use and privacy policy</p>
      <span>
        <button>Đăng Ký</button>
        <button>Cancel</button>
      </span>
    </div>
    )
}

export default LoginForm