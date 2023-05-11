import React from 'react'
import { useFormik } from "formik"
import { Button, Container, TextField } from '@mui/material'
import { Validations } from './validation';
import axios from 'axios';




function BasicForm() {
    const handleSubmit = async (values, actions) => {
        await axios.post("http://localhost:3000/products", values);
        console.log(values);
        actions.resetForm()
    }
    let formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            percentage: "",
            imageURL: "",
            unitsInStock: ""
        },
        onSubmit: handleSubmit,
        validationSchema: Validations,
    })

    return (

        <div style={{ margin: '4% auto', width: '425px', height: '560px', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center', paddingTop: '60px' }}>Product Add Form</h2>
            <a href='http://localhost:3000/products' style={{ marginLeft: '150px', fontFamily: 'sans-serif' }}>API link to check</a>
            <Container>
                <form onSubmit={formik.handleSubmit} style={{ paddingTop: '50px' }}>
                    <div style={{ display: 'flex', }}>
                        <TextField
                            className={formik.errors.name && formik.touched.name ? "input-error" : ""}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            style={{ marginRight: '5px' }}
                            type='text'
                            name='name'
                            id="outlined-basic"
                            label="Name"
                            variant="outlined" />


                        {formik.errors.name && formik.touched.name &&
                            (
                                <small style={{ color: 'indianred' }}>{formik.errors.name}</small>
                            )}


                        <TextField
                            className={formik.errors.price && formik.touched.price ? "input-error" : ""}
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            onBlur={formik.handleBlur}
                            style={{ marginLeft: '5px' }}
                            type='number'
                            name='price'
                            id="Price"
                            label="Price"
                            variant="outlined" />
                    </div>


                    {formik.errors.price && formik.touched.price &&
                        (
                            <small style={{ color: 'indianred' }}>{formik.errors.price}</small>
                        )}


                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <TextField
                            className={formik.errors.percentage && formik.touched.percentage ? "input-error" : ""}
                            onChange={formik.handleChange}
                            value={formik.values.percentage}
                            onBlur={formik.handleBlur}
                            style={{ marginRight: '5px' }}
                            type='number'
                            name='percentage'
                            id="percentage"
                            label="Discount Percentage"
                            variant="outlined" />

                        {formik.errors.percentage && formik.touched.percentage &&
                            (
                                <small style={{ color: 'indianred' }}>{formik.errors.percentage}</small>
                            )}

                        <TextField
                            className={formik.errors.imageURL && formik.touched.imageURL ? "input-error" : ""}
                            onChange={formik.handleChange}
                            value={formik.values.imageURL}
                            onBlur={formik.handleBlur}
                            style={{ marginLeft: '5px' }}
                            type='url'
                            name='imageURL'
                            id="imageURL"
                            label="Image URL"
                            variant="outlined" />

                        {formik.errors.imageURL && formik.touched.imageURL &&
                            (
                                <p>
                                    <small style={{ color: 'indianred' }}>{formik.errors.imageURL}</small>

                                </p>
                            )}

                    </div>
                    <TextField
                        className={formik.errors.unitsInStock && formik.touched.unitsInStock ? "input-error" : ""}
                        onChange={formik.handleChange}
                        value={formik.values.unitsInStock}
                        onBlur={formik.handleBlur}
                        style={{ marginTop: '20px', marginLeft: '75px' }}
                        type='number'
                        name='unitsInStock'
                        id="unitsInStock"
                        label="Units in Stock"
                        variant="outlined" />

                    {formik.errors.unitsInStock && formik.touched.unitsInStock &&
                        (
                            <p>
                                <small style={{ color: 'indianred' }}>{formik.errors.unitsInStock}</small>

                            </p>
                        )}


                </form>
                <Button disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0} style={{ marginTop: '20px', marginLeft: '40%' }} type='submit'>ADD</Button>

            </Container>
        </div>


    )
}

export default BasicForm