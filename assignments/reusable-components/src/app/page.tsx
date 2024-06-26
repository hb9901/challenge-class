"use client";

import Button from "@/components/Button";
import Chip from "@/components/Chip";

export default function Home() {
  return (
    <>
      <div className="h-50 flex flex-col items-center justify-center gap-y-4">
        <h2>Chips</h2>
        <Chip label="primary" intent="primary" />
        <Chip label="secondary" intent="secondary" />
        <Chip label="warning" intent="warning" />
        <Chip label="danger" intent="danger" />
        <Chip label="info" intent="info" />
        <Chip label="default" />
      </div>
      <hr />

      <div className="h-50 flex flex-col items-center justify-center gap-y-4">
        <h2>Buttons</h2>
        <Button intent={"primary"} size={"sm"} onClick={() => alert("예시")}>
          Primary
        </Button>
        <Button intent={"primary"} size={"md"}>
          Primary
        </Button>
        <Button intent={"primary"} size={"lg"}>
          Primary
        </Button>
        <Button intent={"primary"} size={"lg"} variant={"outline"}>
          Primary
        </Button>
        <Button intent={"secondary"} size={"sm"}>
          Secondary
        </Button>
        <Button intent={"secondary"} size={"md"}>
          Secondary
        </Button>
        <Button intent={"secondary"} size={"lg"}>
          Secondary
        </Button>
        <Button intent={"secondary"} size={"lg"} variant={"outline"}>
          Secondary
        </Button>
        <Button intent={"danger"} size={"sm"}>
          Danger
        </Button>
        <Button intent={"danger"} size={"md"}>
          Danger
        </Button>
        <Button intent={"danger"} size={"lg"}>
          Danger
        </Button>
        <Button intent={"danger"} size={"lg"} variant={"outline"}>
          Danger
        </Button>
      </div>
    </>
  );
}
