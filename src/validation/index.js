import * as yup from "yup";

const IMGURL=/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/

export const Validations=yup.object().shape({

name: yup.string().min(4,"name must be at least 4 characters").required("Required"),
price:yup.number().positive("price cannot be negative number").required("Required"),
percentage:yup.number().positive("discountPercentage cannot be negative number").min(0,"percentage must be at least 0").max(100,"percentage must be at least 0").integer().required("Required"),
imageURL:yup.string().matches(IMGURL,"Enter img Url").required("Required"),
unitsInStock: yup.number().required("Required")






})