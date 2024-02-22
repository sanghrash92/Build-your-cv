// import { useState } from 'react'
import { Label, Input } from './profile'

const Edu = ({ formEd }) => {
    return (
        <div className='education-container'>
            <h2>Education</h2>
            <hr style={{border: '2px solid', marginLeft: '90px'}} />
            <br />
            <h3>College</h3>
            <p>{formEd.college}</p>
            <p>{formEd.collegeYear}</p>
            <br />
            <h3>University</h3>
            <p>{formEd.degree}</p>
            <p>{formEd.degreeYear}</p>
            <br />
        </div>
    )
}

function Education({ setData }) {

    function handleCollegeChange(e) {
        setData(f => ({...f, college: e.target.value}))
    }

    function handleCollegeYearChange(e) {
        setData(f => ({...f, collegeYear: e.target.value}))
    }

    function handleDegreeChange(e) {
        setData(f => ({...f, degree: e.target.value}))
    }

    function handleDegreeYearChange(e) {
        setData(f => ({...f, degreeYear: e.target.value}))
    }

    return (
        <div className="education-label">
            <h2>Education</h2>
            <section className="college">
                <Label htmlName='college'
                        variable='College: ' />
                <Input type='text'
                        placeholder='Whatever College'
                        handleChange={handleCollegeChange} />
            </section>
            <section className="college-year">
                <Label htmlName='college-year'
                        variable='Year Passed: ' />
                <Input type='number'
                        placeholder='2004'
                        handleChange={handleCollegeYearChange} />
            </section>
            <section className="degree">
                <Label htmlName='degree'
                        variable='Degree: ' />
                <Input type='text'
                        placeholder='Whatever Uni'
                        handleChange={handleDegreeChange} />
            </section>
            <section className="degree-year">
                <Label htmlName='year'
                        variable='Year Passed: ' />
                <Input type='number'
                        placeholder='2008'
                        handleChange={handleDegreeYearChange} />
            </section>
        </div>
)

}

export { Education, Edu }