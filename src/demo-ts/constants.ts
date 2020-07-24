export let employeeList: {firstName: String, lastName: String, email: String}[] = [
  {firstName: "Daniel", lastName: "Moon", email: "123@callibrity.com"},
  {firstName: "Allen", lastName: "Hulley", email: "456@callibrity.com"}
];

interface ProductCatalog {
  [productName: string]: {
    price: number,
    rating?: {average: string},
    locations: string[]
  }
}

export let productCatalog: ProductCatalog = {
  "paint": {
    price: 100,
    rating: {
      average: "5 star"
    },
    locations: [
      "houston",
      "cincinnati"
    ]
  },
  "coat": {
    price: 1,
    rating: {
      average: "3 star"
    },
    locations: [
      "houston",
      "cincinnati"
    ]
  },
  "hat": {
    price: 8,
    rating: {
      average: "2 star"
    },
    locations: [
      "cincinnati"
    ]
  },
  "desk": {
    price: 1000,
    locations: [
      "florida",
      "the moon"
    ]
  }
}