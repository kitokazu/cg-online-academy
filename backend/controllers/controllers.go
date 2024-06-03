package controllers

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/stripe/stripe-go/v78"

	//"github.com/stripe/stripe-go/v78/customer"
	"github.com/stripe/stripe-go/v78/paymentintent"
)

func GetPrice() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("couldn't load environment vars")
		os.Exit(1)
	}

	// Put this code somewhere else
	stripe.Key = os.Getenv("STRIPE_SECRET_KEY")

	params := &stripe.PaymentIntentListParams{}
	result := paymentintent.List(params)

	for result.Next() {
		pi := result.PaymentIntent()
		fmt.Println(pi.ReceiptEmail)
	}

	// ADD METADATA COURES_ID TAG
	// params := &stripe.PriceParams{}
	// params.AddMetadata("course_id", "6")
	// res, err := price.Update("price_1PLxiARt7cEVfD2gdFhTj1GH", params)
	// fmt.Println(res)

	// So, we are going to add metadata for the product, so that the actual name
	// which will ultimatley change, doesn't matter as the metadata will stya the same
	// we use the metadata as a unique identifier.
	// Frontend will pass in an object identifier that corresponds to metadata

	// create customer with no params
	// c, _ := customer.New(nil)
	// fmt.Println(c)

	// fetch a customer
	// c, _ := customer.Get("cus_QDwUtrwTS6ANkf", nil)
	// fmt.Println(c.Metadata)

	//create customer with scalar values
	// params := &stripe.CustomerParams{
	// 	Email: stripe.String("yo@example.com"),
	// 	Name:  stripe.String("yooo"),
	// }
	// c, _ := customer.New(params)
	// fmt.Println(c)
	//fmt.Println(c.name)
	//email-jeunny.rosen@example.com&name=Jenny%20 -- form encoded

	// 	params := &stripe.CustomerParams{
	// 		TaxExempt: stripe.String(
	// 			string(
	// 				stripe.CustomerTaxExemptNone,
	// 			),
	// 		),
	// 	}
	// 	c, _ := customer.New(params)
	// 	fmt.Println(c.TaxExempt)

	// creat cusotmer with nested params
	// params := &stripe.CustomerParams{
	// 	PaymentMethod: stripe.String("pm_card_visa"),
	// 	InvoiceSettings: &stripe.CustomerInvoiceSettingsParams{
	// 		DefaultPaymentMethod: stripe.String("pm_card_visa"),
	// 	},
	// }
	// c, _ := customer.New(params)
	// fmt.Println(c)

	// Create a customer with list of strings
	// params :=  &stripe.CustomerParams{
	// 	PreferredLocales: stripe.StringSlice(
	// 		[]string{"en", "es"},
	// 	),
	// }
	// c, _ := customer.New(params)
	// fmt.Println(c.PreferredLocales)

	// Update email address of customer
	// params := &stripe.CustomerParams{
	// 	Email: stripe.String("jr@example.com"),
	// }
	// c, _ := customer.Update(
	// 	"cus_QBVoMgUePtYUVr",
	// 	params,
	// )
	// fmt.Println(c.ID)
	// fmt.Println(c.Email)

	//Fetch a list of customers
	// params := &stripe.CustomerListParams{
	// 	Email: stripe.String("jenny.rosen@example.com"),
	// }
	// params.Single = true //wont autopaginate through every customer
	// i := customer.List(params)
	// for i.Next() {
	// 	c := i.Customer()
	// 	fmt.Println(c.ID)
	// }

	//Delete a customer
	// c, _ := customer.Del("cus_QBVoMgUePtYUVr", nil)
	// fmt.Println(c)

	// Create a payment intent to confirm later
	// params := &stripe.PaymentIntentParams{
	// 	Amount:   stripe.Int64(1000),
	// 	Currency: stripe.String(string(stripe.CurrencyUSD)),
	// 	AutomaticPaymentMethods: &stripe.PaymentIntentAutomaticPaymentMethodsParams{
	// 		Enabled:        stripe.Bool(true),
	// 		AllowRedirects: stripe.String("never"),
	// 	},
	// }
	// pi, _ := paymentintent.New(params)
	// fmt.Println(pi.ID)
	// fmt.Println(pi.Status)

	// Then, we want to confirm payment intent
	// anytime we do crud operation, we use a verb such as Confirm
	// params := &stripe.PaymentIntentConfirmParams{
	// 	PaymentMethod: stripe.String("pm_card_visa"),
	// }
	// pi, _ := paymentintent.Confirm(
	// 	"pi_3PLA3RRt7cEVfD2g0spf4PE3",
	// 	params,
	// )
	// fmt.Println(pi.ID)
	// fmt.Println(pi.Status)

}
