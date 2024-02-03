import { classDescriptions } from "./Vars/Events"

interface IClass {
    name: string
    description: string
    id?:string
}
  
  export default function ClassDescriptions() {
    return (
      <div>
        <div className="mx-auto max-w-7xl divide-y divide-white px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight">Class Descriptions</h2>
          <dl className="mt-10 space-y-4 divide-y divide-white">
            {classDescriptions.map((classInfo: IClass) => (
              <div id={classInfo.id} key={classInfo.name} className="pt-8 lg:grid lg:grid-cols-8 lg:gap-4">
                <dt className="text-base font-semibold leading-7 lg:col-span-3">{classInfo.name}</dt>
                <dd className="mt-4 lg:col-span-5 lg:mt-0">
                  <p className="text-base leading-7">{classInfo.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }