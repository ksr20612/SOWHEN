import Link from "next/link";
import React, { ReactElement, useState, useEffect, useCallback, useRef } from "react";

const NotFound = (): ReactElement => {

    return (
        <>
            404 - NOT FOUND <br/>
            <Link href="/">Go back to Home</Link>
        </>
    )
}

export default NotFound