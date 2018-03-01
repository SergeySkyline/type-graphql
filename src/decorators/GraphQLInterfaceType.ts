import { MetadataStorage } from "../metadata/metadata-storage";
import { getNameDecoratorParams } from "../helpers/decorators";
import { DescriptionOptions } from "../types/decorators";

export function GraphQLInterfaceType(options?: DescriptionOptions): ClassDecorator;
export function GraphQLInterfaceType(name: string, options?: DescriptionOptions): ClassDecorator;
export function GraphQLInterfaceType(
  nameOrOptions?: string | DescriptionOptions,
  maybeOptions?: DescriptionOptions,
): ClassDecorator {
  const { name, options } = getNameDecoratorParams(nameOrOptions, maybeOptions);
  return target => {
    MetadataStorage.registerInterfaceDefinition({
      name: name || target.name,
      target,
      description: options.description,
    });
  };
}
