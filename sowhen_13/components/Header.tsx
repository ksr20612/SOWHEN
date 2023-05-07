'use client';
import Link from "next/link";
import React, { ReactElement, useState, useEffect, useCallback, useRef } from "react";
import SoWhen from "./SoWhen";
import Button from "./Button";

const Header = (): ReactElement => {

    return (
        <header className="flex justify-between items-center h-auto mx-5 py-3 mb-5 border-b-2">
            <SoWhen size="50px" />
            <Link href="/signIn">로그인</Link>
        </header>
    )
}

export default Header;