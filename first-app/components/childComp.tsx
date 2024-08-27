import { BaseBallType } from "@/app/detail/page";

export default function ChildComp({ body }: { body: BaseBallType[] }) {
  console.log(body);
  return (
    <>
      {body.map((value, i) => {
        return (
          <div className="childCompBody" key={i}>
            <span>{value.name}</span>
            <span>{value.win}</span>
            <span>{value.locate}</span>
          </div>
        );
      })}
    </>
  );
}
