---
layout: ../../layouts/post.astro
title: "useSearchParams React Hook"
pubDate: 2025-02-05
description: "Uma alternativa melhorada ao useSearchParams do react-router."
author: "joismar"
image:
  src:
  alt:
tags: ["web", "frontend", "react", "react-router", "typescript", "real world", "hook"]
type: "snippet"
---
![Capa do Projeto](https://placehold.co/736x200)

**Status do Projeto:** ![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)  
**Tipo de Projeto:** Biblioteca de Hooks \
**Área Principal:** Frontend

## 📋 Visão Geral
O `useSearchParams` é um hook customizado para gerenciar os parâmetros de busca de uma URL. Ele é uma alternativa melhorada ao `useSearchParams` do `react-router`, pois permite a definição de parâmetros padrão, tratamento de tipos de dados e valores vazios. O hook é útil para aplicações que necessitam de controle de filtros, ordenação, paginação, etc., através da URL. O público-alvo são desenvolvedores React que precisam de uma solução mais robusta para gerenciar os parâmetros de busca de uma URL.

## 🛠️ Tecnologias Utilizadas
**Tecnologia Principal:** ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)

## ✨ Funcionalidades Principais
- Definição de parâmetros padrão 🛠️
- Tratamento de tipos de dados de forma automática 🧹
- Suporte a tipos de dados: string, string[], boolean, Date, number 📊

## 💻 Implementação

```typescript showLineNumbers
import * as React from "react";
import { useSearchParams as useReactRouterSearchParams } from "react-router-dom"; // ou seu router preferido

type SearchParamsConfig<T> = {
  defaultParams?: T;
  readonly?: boolean;
  ignoreEmpty?: (keyof T)[];
};

export function useSearchParams<T extends Record<string, string | string[] | boolean | null | Date | number>>(
  config?: SearchParamsConfig<T>,
): [T, (newParams: Partial<T>) => void, () => boolean] {
  const defaultParams = React.useMemo(() => config?.defaultParams, [config?.defaultParams]);
  for (const key in defaultParams) {
    if (defaultParams[key] === undefined) {
      delete defaultParams[key];
    }
  }

  const arrayToString = (arr: string[]) => `${arr.join(".")}.`;
  const stringToArray = (str: string) => str.replace(/.$/g, "").split(".");
  const booleanToString = (bool: boolean) => (bool ? "true" : "false");
  const dateToString = (date: Date) => formatDateToCustomString(date);
  const stringToDate = (str: string) => parseCustomStringToDate(str);

  const formatValueForParam = (value: string | string[] | boolean | Date | number) => {
    if (Array.isArray(value)) return arrayToString(value);
    if (typeof value === "boolean") return booleanToString(value);
    if (value instanceof Date) return dateToString(value);
    return value.toString();
  };

  const formatValueFromParam = (value: string, type?: string) => {
    if (value.endsWith(".")) return stringToArray(value);
    if (value === "true" || value === "false") return value === "true";
    if (isValidCustomDateFormat(value)) return stringToDate(value);
    if (type === "number") return Number(value);
    return value;
  };

  const convertParamsToSearchParams = (params: T | undefined) => {
    if (!params) return undefined;
    const searchParams = new URLSearchParams();
    for (const key in params) {
      const value = params[key];
      if (value === undefined || value === null) continue;
      if (typeof value === "string" && value === "") continue;
      if (Array.isArray(value) && value.length === 0) continue;
      searchParams.set(key, formatValueForParam(value));
    }
    return searchParams;
  };

  const convertSearchParamsToParams = (searchParams: URLSearchParams) => {
    const params: any = {};
    searchParams.forEach((value, key) => {
      params[key] = formatValueFromParam(value, typeof defaultParams?.[key]);
    });
    return params as T;
  };

  const [searchParams, setSearchParams] = useReactRouterSearchParams();
  const searchParamsSize = Array.from(searchParams.entries()).length;
  const [params, setParams] = React.useState<T>(
    searchParamsSize ? convertSearchParamsToParams(searchParams) : defaultParams || ({} as T),
  );

  const updateParams = (newParams: Partial<T>) => {
    const updatedParams = { ...params, ...newParams };
    setParams(updatedParams);
    setSearchParams(convertParamsToSearchParams(updatedParams), { replace: true });
  };

  const empty = () => {
    for (const key in params) {
      if (config?.ignoreEmpty?.includes(key)) continue;
      const value = params[key];
      if (value === undefined || value === null) continue;
      if (typeof value === "string" && value === "") continue;
      if (Array.isArray(value) && value.length === 0) continue;
      return false;
    }
    return true;
  };

  React.useEffect(() => {
    if (!searchParamsSize) return;
    setParams(convertSearchParamsToParams(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  React.useEffect(() => {
    if (searchParamsSize || config?.readonly) return;
    setSearchParams(convertParamsToSearchParams(defaultParams), { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { params, updateParams, empty };
}

function parseCustomStringToDate(customString: string): Date {
  const year = parseInt(customString.substring(0, 4), 10);
  const month = parseInt(customString.substring(4, 6), 10) - 1;
  const day = parseInt(customString.substring(6, 8), 10);
  const hours = parseInt(customString.substring(9, 11), 10);
  const minutes = parseInt(customString.substring(11, 13), 10);
  const seconds = parseInt(customString.substring(13, 15), 10);

  return new Date(year, month, day, hours, minutes, seconds);
}

function isValidCustomDateFormat(str: string): boolean {
  const regex = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3])([0-5][0-9])([0-5][0-9])Z$/;
  return regex.test(str);
}

function formatDateToCustomString(date: Date): string {
  const pad = (num: number) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}
```

## ⚒️ Exemplo de Uso

```typescript showLineNumbers
import * as React from "react";
import { useSearchParams } from "./useSearchParams";

export function App() {
  const { params, updateParams, empty } = useSearchParams({
    defaultParams: {
      name: "",
      age: 0,
      active: false,
      tags: [],
      createdAt: new Date(),
    },
    ignoreEmpty: ["tags"],
  });

  return (
    <div>
      <input
        type="text"
        value={params.name}
        onChange={(e) => updateParams({ name: e.target.value })}
      />
      <input
        type="number"
        value={params.age}
        onChange={(e) => updateParams({ age: Number(e.target.value) })}
      />
      <input
        type="checkbox"
        checked={params.active}
        onChange={(e) => updateParams({ active: e.target.checked })}
      />
      <input
        type="text"
        value={params.tags.join(",")}
        onChange={(e) => updateParams({ tags: e.target.value.split(",") })}
      />
      <input
        type="datetime-local"
        value={params.createdAt.toISOString().substring(0, 16)}
        onChange={(e) => updateParams({ createdAt: new Date(e.target.value) })}
      />
      <button onClick={() => updateParams({ name: "", age: 0, active: false, tags: [], createdAt: new Date() })}>
        Limpar
      </button>
      <button onClick={() => console.log(empty())}>Vazio?</button>
    </div>
  );
}
```

## 🚀 Desafios e Soluções
- **Desafio Técnico:** Conversão de tipos de dados de forma automática.

## 🔗 Links Úteis
- [Demo ao Vivo (em breve...)](https://)
- [Repositório (em breve...)](https://github.com/seusuario/projeto)
- [Documentação Técnica (em breve...)](https://)