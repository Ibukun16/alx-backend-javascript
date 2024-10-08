export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (
    typeof endpoint !== 'object'
    || endpoint === null
    || !endpoint.protocol
    || !endpoint.name
  ) {
    throw new Error('Invalid endpoint');
  }

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const load = weakMap.get(endpoint);

  weakMap.set(endpoint, load + 1);
  if (load >= 5) {
    throw new Error('Endpoint load is high');
  }

  return load;
}
