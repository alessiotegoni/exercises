import { faker } from "@faker-js/faker";
import { countryCodes, Currency, type Company } from "./schema/company";
import * as fs from "fs";

function generateCompany(): Company {
  const country = faker.helpers.arrayElement(countryCodes);
  return {
    companyId: `CO-${faker.string.uuid()}`,
    name: faker.company.name(),
    legalName: faker.company.name(),
    registeredOffice: faker.location.streetAddress(),
    foundationDate: faker.date.past({ years: 100 }),
    vat: {
      country: country,
      value: faker.string.alphanumeric(11),
    },
    industry: {
      sectorName: faker.commerce.department(),
    },
    website: faker.internet.url(),
    country: country,
    employeeCount: faker.number.int({ min: 1, max: 10000 }),
    revenue: {
      millions: faker.number.int({ min: 1, max: 1000 }),
      currency: faker.helpers.arrayElement(["€", "$"]) as Currency,
    },
  };
}

const companies: Company[] = Array.from({ length: 5000 }, generateCompany);

fs.writeFileSync("companies.json", JSON.stringify(companies, null, 2));

console.log(
  "Successfully generated 5000 companies and saved to companies.json"
);
