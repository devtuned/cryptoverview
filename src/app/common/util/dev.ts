export function WarnMocked(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): void {
  const method = descriptor.value as (...args: any[]) => any
  let warned = false
  descriptor.value = function (...args: any[]): any {
    if (!warned) {
      console.warn(`MOCK: ${method.name}()`)
      warned = true
    }
    return method.apply(this, args)
  }
}
