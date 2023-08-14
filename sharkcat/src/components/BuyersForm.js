import { styled } from "styled-components"
import useForm from "../hooks/useForm"

const LabelComponent = styled.label`
    display: block;
    margin-top: 8px;
    margin-bottom: 4px;
`

const MainStyledComponent = styled.main`
    display: flex;
    justify-content: space-around;
    width: 30vw;
`

const BuyersForm = () => {
    const { form, onChange } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        addressLineOne: '',
        addressLineTwo: '',
        stateOrProvince: '',
        zip: '',
        country: ''
    })

    return (
        <MainStyledComponent>
            <section>
                <h4>
                    Personal Information
                </h4>

                <LabelComponent htmlFor='firstName'>First Name</LabelComponent>
                <input value={form.firstName} name={'firstName'} onChange={onChange} required />

                <LabelComponent htmlFor='lastName'>Last Name</LabelComponent>
                <input value={form.lastName} name={'lastName'} onChange={onChange} required />

                <LabelComponent htmlFor='email'>Email</LabelComponent>
                <input value={form.email} name={'email'} onChange={onChange} type={'email'} required />

                <LabelComponent htmlFor='phoneNumber'>Phone Number</LabelComponent>
                <input value={form.phoneNumber} name={'phoneNumber'} onChange={onChange} required />
            </section>
            <section>
                <h4>
                    Address Information
                </h4>

                <LabelComponent htmlFor='addressLineOne'>Address Line 1</LabelComponent>
                <input value={form.addressLineOne} name={'addressLineOne'} onChange={onChange} required />

                <LabelComponent htmlFor='addressLineTwo'>Address Line 2</LabelComponent>
                <input value={form.addressLineTwo} name={'addressLineTwo'} onChange={onChange} />

                <LabelComponent htmlFor='stateOrProvince'>State / Province</LabelComponent>
                <input value={form.stateOrProvince} name={'stateOrProvince'} onChange={onChange} required />

                <LabelComponent htmlFor='zip'>ZIP / Postal Code</LabelComponent>
                <input value={form.zip} name={'zip'} onChange={onChange} required />

                <LabelComponent htmlFor='country'>Country</LabelComponent>
                <input value={form.country} name={'country'} onChange={onChange} required />
            </section>
        </MainStyledComponent>
    )
}

export default BuyersForm