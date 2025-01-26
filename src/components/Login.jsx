import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InitialValues = {
    email: "",
    password: "",
}

const errorMessages = {
    email: "Geçerli bir email adresi giriniz",
    password: "En az 8 karakter, en az bir büyük harf, en az bir küçük harf ve sembol içermelidir",
}

export default function Login() {
    const [formData, setFormData] = useState(InitialValues)
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })
    const [isValid, setIsValid] = useState(false)
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    useEffect(() => {
        if (emailRegex.test(formData.email) && passwordRegex.test(formData.password)) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [formData])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (name == "email") {
            if (emailRegex.test(value)) {
                setErrors({ ...errors, [name]: false })
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }

        if (name == "password") {
            if (passwordRegex.test(value)) {
                setErrors({ ...errors, [name]: false })
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }
    }

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid && isCheckboxChecked) return;
        setFormData(InitialValues);
    }

    return (
        <Card>
            <CardHeader>Giriş Yap</CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email">
                            Email:
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email adresinizi giriniz"
                            type="email"
                            onChange={handleChange}
                            value={formData.email}
                            invalid={errors.email}
                        />
                        {errors.email && <FormFeedback>
                            {errorMessages.email}
                        </FormFeedback>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password:
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Şifrenizi giriniz"
                            type="password"
                            onChange={handleChange}
                            value={formData.password}
                            invalid={errors.password}
                        />
                        {errors.password && <FormFeedback>
                            {errorMessages.password}
                        </FormFeedback>}
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} />
                        {' '}
                        <Label check>
                            Şartları Kabul Ediyorum
                        </Label>
                    </FormGroup>
                    <Button disabled={!isValid || !isCheckboxChecked}>Giriş Yap</Button>
                </Form>
            </CardBody>
        </Card>
    );
}