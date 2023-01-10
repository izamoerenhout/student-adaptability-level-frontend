import { useState } from 'react';

function PredictLogic() {
    const [data, setData] = useState(undefined);
    const [errors, setErrors] = useState(undefined);

    const [gender, setGender] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [education, setEducation] = useState(undefined);
    const [institution, setInstitution] = useState(undefined);
    const [student, setStudent] = useState(undefined);
    const [location, setLocation] = useState(undefined);
    const [load, setLoad] = useState(undefined);
    const [financial, setFinancial] = useState(undefined);
    const [internet, setInternet] = useState(undefined);
    const [network, setNetwork] = useState(undefined);
    const [duration, setDuration] = useState(undefined);
    const [lms, setLms] = useState(undefined);
    const [device, setDevice] = useState(undefined);

    /* const [data, setData] = useState("");
    const [errors, setErrors] = useState("");

    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [education, setEducation] = useState("");
    const [institution, setInstitution] = useState("");
    const [student, setStudent] = useState("");
    const [location, setLocation] = useState("");
    const [load, setLoad] = useState("");
    const [financial, setFinancial] = useState("");
    const [internet, setInternet] = useState("");
    const [network, setNetwork] = useState("");
    const [duration, setDuration] = useState("");
    const [lms, setLms] = useState("");
    const [device, setDevice] = useState(""); */



    const onSubmit = async (event) => {
        event.preventDefault();

        document.write(gender)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "Gender": gender,
                "Age": age,
                "Education Level": education,
                "Institution Type": institution,
                "IT Student": student,
                "Location": location,
                "Load-shedding": load,
                "Financial Condition": financial,
                "Internet Type": internet,
                "Network Type": network,
                "Class Duration": duration,
                "Self Lms": lms,
                "Device": device
            })
        };

        const response = await fetch("https://iza.hcaid.nl/api/predict", requestOptions);
        const data = await response.json();

        if (data.errors.length > 0) {
            setErrors(data.errors);
            return;
        }

        setData(data);
        setErrors(undefined);
    }

    return {
        result: {
            data,
        },
        form: {
            errors,
            data: {
                gender,
                age,
                education,
                institution,
                student,
                location,
                load,
                financial,
                internet,
                network,
                duration,
                lms,
                device
            },
            set: {
                gender: setGender,
                age: setAge,
                education: setEducation,
                institution: setInstitution,
                student: setStudent,
                location: setLocation,
                load: setLoad,
                financial: setFinancial,
                internet: setInternet,
                network: setNetwork,
                duration: setDuration,
                lms: setLms,
                device: setDevice
            },
            onSubmit
        }
    }
}

export default PredictLogic;