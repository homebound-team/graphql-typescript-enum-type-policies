[![NPM](https://img.shields.io/npm/v/@homebound/graphql-typescript-enum-type-policies)](https://www.npmjs.com/package/@homebound/graphql-typescript-graphql-typescript-enum-type-policies)

This is a [graphql-code-generator](https://graphql-code-generator.com/) plugin that generates type policies for
`enum detail` types within your schema.

## Overview

The Apollo InMemory Cache needs to know that for `enum detail` types, the `code` field is the `keyField`, instead
of the typical `id` field, which does not exist on `enum detail` types.

## Contributing

In order to develop changes for this package, follow these steps:

1. Make your desired changes in the [`src` directory](/src)

2. Adjust the example files under the [`integration` directory](/integration) to use your new feature.

3. Run `npm run build`, to create a build with your changes

4. Run `npm run graphql-codegen`, and verify the output in `graphql-types.ts` matches your expected output.

