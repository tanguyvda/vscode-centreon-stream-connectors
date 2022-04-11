export interface IfcInfo {
  class: string,
  name: string,
  description: string,
  documentation: string,
  trigger: string,
  params: Array<any>,
  return: Array<any>
}

export interface IfcResult {
  docHeader: string,
  docParam: string,
  docReturn: string,
  docLink: string,
  docDesc: string
}

export interface IfcParamCompletion {
  prefix: string,
  trigger: string,
  default: string,
  information: string,
  scope: string,
  type: string,
  name: string,
  description: string
}

export interface IfcCacheCompletion {
  prefix: string,
  trigger: string,
  name: string,
  type: string
}

export interface IfcEventCompletion {
  prefix: string,
  trigger: string,
  scope: string,
  name: string,
  type: string
}