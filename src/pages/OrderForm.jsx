import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const validateAddress = () => {
        let errors = {};
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.city) errors.city = 'City is required';
        if (!formData.state) errors.state = 'State is required';
        if (!formData.zip) errors.zip = 'ZIP code is required';
        //else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) errors.zip = 'Invalid ZIP code';
        return errors;
    };

    const handleSubmit = () => {
        const validationErrors = validateAddress();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
            // Handle form submission
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit} success={submitted} error={Object.keys(errors).length > 0}>
            <Form.Input
                label='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
            />
            <Form.Input
                label='Address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                error={errors.address ? { content: errors.address } : null}
            />
            <Form.Input
                label='City'
                name='city'
                value={formData.city}
                onChange={handleChange}
                error={errors.city ? { content: errors.city } : null}
            />
            <Form.Input
                label='State'
                name='state'
                value={formData.state}
                onChange={handleChange}
                error={errors.state ? { content: errors.state } : null}
            />
            <Form.Input
                label='ZIP'
                name='zip'
                value={formData.zip}
                onChange={handleChange}
                error={errors.zip ? { content: errors.zip } : null}
            />
            <Button type='submit'>Submit</Button>
            <Message
                success
                header='Form Completed'
                content="You're all signed up for the newsletter"
            />
            <Message
                error
                header='Form Error'
                content='Please correct the errors in the form'
            />
        </Form>
    );
};

export default OrderForm;