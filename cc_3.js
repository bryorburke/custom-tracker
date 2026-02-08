// Customer Records
let customers = [
    {
        name: "Bryor Burke",
        email: "bryorb@usf.edu",
        purchases: ["Bones", "Teeth"]
    },
    {
        name: "Angelica Smith",
        email: "ponies@yahoo.com",
        purchases: ["Tulips", "Roses"]
    },
    {
        name: "Kaelee Crowder",
        email: "kkcrow@gmail.com",
        purchases: ["Among Us", "Teeth", "Spoon"]
    }
]
console.log("Initial Customers:", customers)

// New Customer
customers.push({
    name: "Judas Iscariot",
    email: "traitor@outlook.com",
    purchases: ["Silver Coins", "Hellfire"]
})

// Remove First Customer
customers.shift()

console.log("After Removed Customer", customers)

// Update Customer Info

customers[0].email = "peonies@yahoo.com"

customers[1].purchases.push("Kitten")

console.log("After Updates:", customers)

// Display Customer Information
console.log("Customer Summary")
customers.forEach(Customer => {
    console.log(`Customer: ${customers.name} | Email: ${customers.email} | Total Purchases: ${customer.purchases.length}`)
}) 

// Change "Customer" to "customer" to fix error
customers.forEach(customer => {
    console.log(`Customer: ${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`)
})