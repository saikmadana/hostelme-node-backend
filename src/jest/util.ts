import supertest, { Response, SuperTest, Test } from 'supertest'

const remoteUrl = process.env.REMOTE_URL ? process.env.REMOTE_URL : 'http://localhost:3000'

// tslint:disable-next-line: no-let
let requestP: SuperTest<Test>

const getRequest: () => SuperTest<Test> = () => {
  if (!requestP) {
    requestP = supertest.agent(remoteUrl)
  }
  return requestP
}

export const request = getRequest()

export const testGet: (url: string) => Promise<Response> = async url => {
  return request.get(url).set('Content-Type', 'application/json')
}

export const testPost: (url: string, body: object) => Promise<Response> = async (url, body) => {
  return request.post(url).set('Content-Type', 'application/json').send(body)
}

export const testPut: (url: string, body: object) => Promise<Response> = async (url, body) => {
  return request.put(url).set('Content-Type', 'application/json').send(body)
}

export const testDelete: (url: string) => Promise<Response> = async url => {
  return request.delete(url).set('Content-Type', 'application/json')
}

export const testDeleteWithBody: (url: string, body: object) => Promise<Response> = async (url, body) => {
  return request.delete(url).set('Content-Type', 'application/json').send(body)
}