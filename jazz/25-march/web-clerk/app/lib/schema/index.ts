import { CoMap, co, Account, Profile, CoList } from "jazz-tools"

export class Product extends CoMap {
  name = co.string
  description = co.string
  priceInUsd = co.number
  publishedAt = co.boolean
  approved = co.boolean
  featured = co.boolean
}

export class ListOfProducts extends CoList.Of(co.ref(Product)) {}

export class MainAccountRoot extends CoMap {
  products = co.ref(ListOfProducts)
}

export class MainAccount extends Account {
  profile = co.ref(Profile)
  root = co.ref(MainAccountRoot)

  migrate(this: MainAccount, creationProps?: { name: string }) {
    super.migrate(creationProps)
    if (!this._refs.root) {
      this.root = MainAccountRoot.create(
        {
          products: ListOfProducts.create([], { owner: this }),
        },
        { owner: this },
      )
    }
  }
}
