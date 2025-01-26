import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label } from "reactstrap";

const InitialValues = {
    email: "",
    password: "",
}

export default function Login() {
    const [formData, setFormData] = useState(InitialValues)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

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
                        />
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
                        />
                    </FormGroup>
                    <Button>Giriş Yap</Button>
                </Form>
            </CardBody>
        </Card>
    );
}