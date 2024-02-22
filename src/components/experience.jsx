
import {Label, Input } from './profile';

function Experience({ formExp, setForm, exp, setExp }) {

    function handleJobChange(e) {
        setForm(j => ({...j, job: e.target.value}))
    }

    function handleCompanyChange(e) {
        setForm(c => ({...c, comp: e.target.value}))
    }

    function handleYearFromChange(e) {
        setForm(f => ({...f, from: e.target.value}))
    }

    function handleYearToChange(e) {
        setForm(f => ({...f, to: e.target.value}))
    }

    function handleDescriptionChange(e) {
        setForm(f => ({...f, description: e.target.value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setExp([
            ...exp, formExp
        ])
        event.target.reset();
    }

    return (
        <form name='exp' className="experience-label" onSubmit={handleSubmit} >
            <h2>Experience</h2>
            <section className='company-worked'>
                <Label htmlName='company'
                        variable='Company Name:' />
                <Input type='text'
                        placeholder='Microsoft'
                        handleChange={handleCompanyChange} />
            </section>
            <section className='job-held'>
                <Label htmlName='name'
                        variable='Job: ' />
                <Input type='text`' 
                        placeholder='Brewer'
                        handleChange={handleJobChange}
                     />
            </section>
            <section className='from-year'>
                <Label htmlName='worked from'
                        variable='From: ' />
                <Input type='number' 
                        placeholder='2010'
                        handleChange={handleYearFromChange}
                     />
            </section>
            <section className='to-year'>
                <Label htmlName='worked to'
                        variable='To: ' />
                <Input type='number' 
                        placeholder='2015'
                        handleChange={handleYearToChange}
                     />
            </section>
            <section className='description'>
                <Label htmlName='description'
                        variable='Description' />
                <textarea name="descriptiion" cols="25" rows="4" onChange={handleDescriptionChange} style={{width: '50%', padding: '5px'}} ></textarea>
            </section>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export { Experience }