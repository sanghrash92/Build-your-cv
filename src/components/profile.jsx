
const Label = ({ htmlName, variable }) => {
    return <label 
                style={{color:'white',
                        fontSize: '20px'}}
                htmlFor={htmlName}>{variable}</label>
  }
  
const Input = ({ type, placeholder, handleChange }) => {
return (
    <input type={type}
        placeholder={placeholder} 
        onChange={handleChange} 
        style={{
            padding:'5px',
            fontSize:'15px',
            width: '50%'
        }}></input>
)
}

const Profiles = ({formProfile}) => {
    return (
      <div className="profile-container">
        <h2>{formProfile.name}</h2>
        <p>{formProfile.currentPosition}</p>
        <br />
        <p>{formProfile.aboutMe}</p>
        <br />
        <hr style={{border: '2px solid'}} />
      </div>
    )
}

function Profile({setForm}) {

    function handleNameChange(e) {
        setForm(n => ({...n, name: e.target.value}))
    } 

    function handlePositionChange(e) {
        setForm(p => ({...p, currentPosition: e.target.value}))
    }

    function handleAboutChange(e) {
        setForm(a => ({...a, aboutMe: e.target.value}))
    }

    return (
        <div className="profile-label">
            <h2>Profile</h2>
            <section className="name">
                <Label htmlName='name'
                        variable='Name: ' />
                <Input type='text'
                        placeholder='John Doe'
                        handleChange={handleNameChange} />
            </section>
            <section className="current-position">
                <Label htmlName='position'
                        variable='Position: ' />
                <Input type='text'
                        placeholder='Software Developer'
                        handleChange={handlePositionChange} />
            </section>
            <section className="about-me">
                <Label htmlName='about me'
                            variable='Description: ' />
                <textarea name="about me" cols="25" rows="4" onChange={handleAboutChange} style={{width: '50%', padding: '5px'}} ></textarea>
            </section>

        </div>
    )
}

export { Profile, Profiles, Label, Input }