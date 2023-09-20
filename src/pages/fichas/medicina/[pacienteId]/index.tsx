/* eslint-disable @typescript-eslint/no-misused-promises */
import { RecordLayout } from "@/components/layouts/RecordLayout";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import { users, type CardUserProps } from "..";

export const medical_appointments = {
  anamnese: [
    {
      id: "1",
      type: "ficha_gaia",
      date: "01/01/2000",
    },
  ],
};

export default function Medicina() {
  // PEGAR PARAMETROS DA ROTA
  const router = useRouter();
  const { pacienteId } = router.query;

  const [selectUser] = useState<CardUserProps>(
    users.find((user) => user.id === pacienteId!)!,
  );
  const [selectMenu, setSelectMenu] = useState<"anamnese" | "exame-fisico">(
    "anamnese",
  );

  return (
    <RecordLayout>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md bg-white px-4 py-16 shadow-2xl sm:w-[600px]">
        <h1 className="bold text-xl">Medicina</h1>

        <div className="relative flex w-full flex-col gap-4 px-2 pt-8">
          <button
            className="absolute left-0 top-0 flex items-center
              gap-1 text-sm text-gray-400"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className="h-6 w-6" />
            Voltar
          </button>

          <ProfileUser user={selectUser} />

          <div className="flex items-center gap-4 overflow-y-auto border-b-2 border-gray-300 px-2 py-4">
            <button
              className={
                selectMenu === "anamnese"
                  ? "border-b-2 border-blue-400"
                  : "text-gray-400 transition-colors hover:text-gray-600"
              }
              onClick={() => setSelectMenu("anamnese")}
            >
              Anamnese
            </button>

            <div className="h-6 min-w-[1px] bg-gray-300" />

            <button
              className={
                selectMenu === "exame-fisico"
                  ? "border-b-2 border-blue-400"
                  : "text-gray-400 transition-colors hover:text-gray-600"
              }
              onClick={() => setSelectMenu("exame-fisico")}
            >
              Exame Físico
            </button>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto">
            {
              {
                anamnese: medical_appointments.anamnese.map((anamnese) => (
                  <>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-2 self-end text-sm text-gray-400 transition-colors hover:text-gray-600 focus:outline-none">
                          <PlusIcon className="h-6 w-6" />
                          Criar
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Escolha a ficha de anamnese</DialogTitle>
                        </DialogHeader>
                        <Combobox />

                        <DialogFooter>
                          <Button type="submit">Criar</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <div
                      key={anamnese.date}
                      className="flex cursor-pointer items-center justify-between rounded-md bg-gray-300 px-4 py-2 shadow-sm transition-all hover:bg-gray-400 hover:shadow-lg"
                      onClick={() =>
                        router.push(
                          `/fichas/medicina/${selectUser.id}/${anamnese.id}`,
                        )
                      }
                    >
                      <span className="text-sm">{anamnese.date}</span>
                      <ChevronRightIcon className="h-6 w-6" />
                    </div>
                  </>
                )),
                "exame-fisico": <div>exame-fisico</div>,
              }[selectMenu]
            }
          </div>
        </div>
      </div>
    </RecordLayout>
  );
}

type ProfileUserProps = {
  user: { name: string; cpf: string };
};

function ProfileUser({ user }: ProfileUserProps) {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md border border-gray-300 bg-gray-100 px-4 py-2">
      <span className="text-sm">Nome: {user.name}</span>
      <span className="text-sm">Nome Social: Pipoca</span>
      <span className="text-sm">CPF: {user.cpf}</span>
      <span className="text-sm">RG: 123456789</span>
      <span className="text-sm">Data de Nascimento: 01/01/2000</span>
      <span className="text-sm">Idade: 21</span>
      <span className="text-sm">Responsável: Pipoca</span>
    </div>
  );
}

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "ilhasLegais",
    label: "Ilhas Legais",
  },
  {
    value: "gaia",
    label: "Gaia",
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Selecione o tipo..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Selecione o tipo..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
