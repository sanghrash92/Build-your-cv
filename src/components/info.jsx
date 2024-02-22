
import { Label, Input } from './profile'

const Infos = ({ formInfo }) => {
    return (
        <div className='address-container'>
            <h2>Contact</h2>
            <hr style={{border: '2px solid', marginLeft: '100px'}} />
            <br />
            <h3>Phone no.</h3>
            <p>{formInfo.phone}</p>
            <br />
            <h3>Email</h3>
            <p>{formInfo.email}</p>
            <br />
            <h3>Address</h3>
            <p>{formInfo.address}</p>
            <br />            
        </div>
    )
}

function Info({ setAddress }) {

    function handlePhoneChange(e) {
        setAddress(n => ({...n, phone: e.target.value}))
    } 

    function handleEmailChange(e) {
        setAddress(p => ({...p, email: e.target.value}))
    }

    function handleAddressChange(e) {
        setAddress(a => ({...a, address: e.target.value}))
    }

    return (
        <div className="label-address">
            <h2>Address</h2>
            <section className="phone">
                <Label htmlName='phone'
                        variable='Phone: ' />
                <Input type='number'
                        placeholder='123456789'
                        handleChange={handlePhoneChange} />
            </section>
            <section className="email">
                <Label htmlName='email'
                        variable='Email: ' />
                <Input type='text'
                        placeholder='johnDoe@whatever.com'
                        handleChange={handleEmailChange} />
            </section>
            <section className="address">
                <Label htmlName='address'
                        variable='Address: ' />
                <textarea name="address" cols="25" rows="4" onChange={handleAddressChange} style={{width:'50%', padding: '5px'}} ></textarea>
            </section>
        </div>
    )
}

export { Info, Infos } 