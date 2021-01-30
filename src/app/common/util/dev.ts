export function WarnMocked(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): void {
  const method = descriptor.value as (...args: any[]) => any
  descriptor.value = function (...args: any[]): any {
    console.warn(`MOCK: ${method.name}`)
    return method.apply(this, args)
  }
}
