import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Mv3xhSEdqVslsKoEgnZEBIdBPKdkqxv2BwqY31awSvFloWp7UKa6u6M54RK7EySioay6gnif0aHqwv6aIZy1bNW00ozCGQ3z2"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}