import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { GraphQLNamedType, GraphQLObjectType } from "graphql";
import { code } from "ts-poet";
import PluginOutput = Types.PluginOutput;

/** Generates a `enumPolicies` config object for apollo inmemory cache. */
export const plugin: PluginFunction<{}> = async (schema) => {
  const enumTypePolicyFields = Object.values(schema.getTypeMap())
    .filter(isEnumDetailObject)
    .map(
      (enumDetail) => code`
      ${enumDetail.name}: { keyFields: ["code"] },`,
    );

  const content = await code`
    export const enumTypePolicies = {
      ${enumTypePolicyFields.join("")}
    };
  `.toString();
  return { content } as PluginOutput;
};

/**
 * Look for the FooDetail/code/name pattern of our enum detail objects.
 *
 * NOTE: Borrowed from graphql-typescript-factories. A helper library may be in order?
 */
function isEnumDetailObject(object: GraphQLNamedType): object is GraphQLObjectType {
  return (
    object instanceof GraphQLObjectType &&
    object.name.endsWith("Detail") &&
    Object.keys(object.getFields()).length >= 2 &&
    !!object.getFields()["code"] &&
    !!object.getFields()["name"]
  );
}
