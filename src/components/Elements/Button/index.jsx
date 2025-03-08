const Button = (props) => {
    const {children, variant, color} = props;
    return (
      <button 
      className={`w-11/12 h-10 ${variant} ${color} rounded-lg font-sans font-bold text-base tracking-wider my-2 flex justify-center items-center mx-4`}
      type="submit" >
        {children}
        </button>
        
    )
  }

  export default Button;