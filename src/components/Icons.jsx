export const RefreshIcon = ({ width, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width={width} height={width} viewBox="0 0 24 24" stroke-width="1.5" stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
        </svg>
    )
}

export const FilterIcon = ({ color }) => {
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7.16667C18.5858 7.16667 18.25 7.50245 18.25 7.91667C18.25 8.33088 18.5858 8.66667 19 8.66667V7.16667ZM31.6666 8.66667C32.0809 8.66667 32.4166 8.33088 32.4166 7.91667C32.4166 7.50245 32.0809 7.16667 31.6666 7.16667V8.66667ZM19 29.3333C18.5858 29.3333 18.25 29.6691 18.25 30.0833C18.25 30.4975 18.5858 30.8333 19 30.8333V29.3333ZM31.6666 30.8333C32.0809 30.8333 32.4166 30.4975 32.4166 30.0833C32.4166 29.6691 32.0809 29.3333 31.6666 29.3333V30.8333ZM19 19.75C19.4142 19.75 19.75 19.4142 19.75 19C19.75 18.5858 19.4142 18.25 19 18.25V19.75ZM6.33331 18.25C5.9191 18.25 5.58331 18.5858 5.58331 19C5.58331 19.4142 5.9191 19.75 6.33331 19.75L6.33331 18.25ZM19 8.66667L31.6666 8.66667V7.16667L19 7.16667V8.66667ZM19 30.8333H31.6666V29.3333H19V30.8333ZM19 18.25L6.33331 18.25L6.33331 19.75L19 19.75V18.25ZM5.58331 7.91667C5.58331 10.0798 7.33686 11.8333 9.49998 11.8333V10.3333C8.16529 10.3333 7.08331 9.25136 7.08331 7.91667H5.58331ZM9.49998 11.8333C11.6631 11.8333 13.4166 10.0798 13.4166 7.91667H11.9166C11.9166 9.25136 10.8347 10.3333 9.49998 10.3333V11.8333ZM13.4166 7.91667C13.4166 5.75355 11.6631 4 9.49998 4V5.5C10.8347 5.5 11.9166 6.58198 11.9166 7.91667H13.4166ZM9.49998 4C7.33686 4 5.58331 5.75355 5.58331 7.91667H7.08331C7.08331 6.58198 8.16529 5.5 9.49998 5.5V4ZM5.58331 30.0833C5.58331 32.2464 7.33686 34 9.49998 34V32.5C8.16529 32.5 7.08331 31.418 7.08331 30.0833H5.58331ZM9.49998 34C11.6631 34 13.4166 32.2464 13.4166 30.0833H11.9166C11.9166 31.418 10.8347 32.5 9.49998 32.5V34ZM13.4166 30.0833C13.4166 27.9202 11.6631 26.1667 9.49998 26.1667V27.6667C10.8347 27.6667 11.9166 28.7486 11.9166 30.0833H13.4166ZM9.49998 26.1667C7.33686 26.1667 5.58331 27.9202 5.58331 30.0833H7.08331C7.08331 28.7486 8.16529 27.6667 9.49998 27.6667V26.1667ZM32.4166 19C32.4166 16.8369 30.6631 15.0833 28.5 15.0833V16.5833C29.8347 16.5833 30.9166 17.6653 30.9166 19H32.4166ZM28.5 15.0833C26.3369 15.0833 24.5833 16.8369 24.5833 19H26.0833C26.0833 17.6653 27.1653 16.5833 28.5 16.5833V15.0833ZM24.5833 19C24.5833 21.1631 26.3369 22.9167 28.5 22.9167V21.4167C27.1653 21.4167 26.0833 20.3347 26.0833 19H24.5833ZM28.5 22.9167C30.6631 22.9167 32.4166 21.1631 32.4166 19H30.9166C30.9166 20.3347 29.8347 21.4167 28.5 21.4167V22.9167Z" fill={color || "black"} />
        </svg>

    )
}

export const EyeCloseIcon = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4685 4.58568C22.792 4.32692 22.8444 3.85495 22.5857 3.53151C22.3269 3.20806 21.855 3.15562 21.5315 3.41438L18.2062 6.07464C16.529 4.56835 14.3897 3.25003 12 3.25003C9.85907 3.25003 7.92327 4.30902 6.35175 5.59574C4.77166 6.88949 3.47964 8.47868 2.61144 9.68804L2.53984 9.78762C2.01718 10.5139 1.58695 11.1117 1.58694 12C1.58694 12.8883 2.01709 13.4861 2.53964 14.2122L2.61121 14.3117C3.15751 15.0727 3.86909 15.9805 4.71226 16.8698L1.53151 19.4144C1.20806 19.6731 1.15562 20.1451 1.41438 20.4685C1.67313 20.792 2.1451 20.8444 2.46855 20.5857L22.4685 4.58568ZM12 4.75003C13.7777 4.75003 15.5024 5.70932 17.0173 7.02574L14.4006 9.11909C13.7506 8.57707 12.9134 8.25003 12 8.25003C9.92896 8.25003 8.25003 9.92896 8.25003 12C8.25003 12.6154 8.39871 13.1971 8.66192 13.71L5.88803 15.9292C5.06702 15.0746 4.36802 14.1868 3.82974 13.4369C3.20595 12.568 3.08694 12.3585 3.08694 12C3.08695 11.6415 3.206 11.432 3.82995 10.5628C4.65922 9.40768 5.86351 7.93417 7.30203 6.75634C8.74913 5.57149 10.3543 4.75003 12 4.75003ZM12 9.75003C12.4362 9.75003 12.8433 9.87383 13.1884 10.0889L9.87436 12.7401C9.79377 12.5085 9.75003 12.2596 9.75003 12C9.75003 10.7574 10.7574 9.75003 12 9.75003Z" fill={color || "#2D264B"} />
            <path d="M20.3954 8.39079C20.1332 8.07006 19.6608 8.02255 19.34 8.28467C19.0193 8.54679 18.9718 9.01928 19.2339 9.34001C19.5844 9.76888 19.8981 10.184 20.17 10.5627C20.7941 11.4319 20.9131 11.6415 20.9131 12C20.9131 12.3585 20.7941 12.5681 20.1701 13.4372C19.3408 14.5924 18.1365 16.0659 16.698 17.2437C15.2509 18.4286 13.6458 19.25 12 19.25C10.5952 19.25 9.21821 18.6521 7.93756 17.7322C7.60113 17.4906 7.13252 17.5674 6.89088 17.9038C6.64923 18.2403 6.72607 18.7089 7.0625 18.9505C8.48703 19.9737 10.1676 20.75 12 20.75C14.141 20.75 16.0768 19.691 17.6483 18.4043C19.2284 17.1106 20.5204 15.5214 21.3886 14.312L21.4602 14.2124C21.9829 13.4862 22.4131 12.8884 22.4131 12C22.4131 11.1117 21.9829 10.5138 21.4602 9.78754L21.3886 9.68796C21.1009 9.28725 20.7682 8.84696 20.3954 8.39079Z" fill={color || "#2D264B"} />
            <path d="M15.75 12C15.75 11.5858 15.4142 11.25 15 11.25C14.5858 11.25 14.25 11.5858 14.25 12C14.25 13.2427 13.2427 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12Z" fill={color || "#2D264B"} />
        </svg>

    )
}

export const EyeOpenIcon = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C9.92894 8.25 8.25001 9.92893 8.25001 12C8.25001 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75001 12C9.75001 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75001 13.2426 9.75001 12Z" fill={color || "#2D264B"} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C9.85905 3.25 7.92325 4.30899 6.35173 5.59572C4.77164 6.88946 3.47962 8.47865 2.61142 9.68801L2.53981 9.78759C2.01715 10.5138 1.58691 11.1117 1.58691 12C1.58691 12.8883 2.01715 13.4862 2.53981 14.2124L2.61142 14.312C3.47962 15.5214 4.77164 17.1105 6.35173 18.4043C7.92325 19.691 9.85905 20.75 12 20.75C14.141 20.75 16.0768 19.691 17.6483 18.4043C19.2284 17.1105 20.5204 15.5214 21.3886 14.312L21.4602 14.2124C21.9829 13.4862 22.4131 12.8883 22.4131 12C22.4131 11.1117 21.9829 10.5138 21.4602 9.78759L21.3886 9.68801C20.5204 8.47865 19.2284 6.88946 17.6483 5.59572C16.0768 4.30899 14.141 3.25 12 3.25ZM3.82993 10.5628C4.6592 9.40765 5.86348 7.93414 7.302 6.75631C8.7491 5.57146 10.3542 4.75 12 4.75C13.6458 4.75 15.2509 5.57146 16.698 6.75631C18.1365 7.93414 19.3408 9.40765 20.1701 10.5628C20.794 11.4319 20.9131 11.6415 20.9131 12C20.9131 12.3585 20.794 12.5681 20.1701 13.4372C19.3408 14.5923 18.1365 16.0659 16.698 17.2437C15.2509 18.4285 13.6458 19.25 12 19.25C10.3542 19.25 8.7491 18.4285 7.302 17.2437C5.86349 16.0659 4.6592 14.5923 3.82993 13.4372C3.20597 12.5681 3.08691 12.3585 3.08691 12C3.08691 11.6415 3.20597 11.4319 3.82993 10.5628Z" fill={color || "#2D264B"} />
        </svg>

    )
}

export const SearchIcon = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5304 17.4698C19.2375 17.1769 18.7626 17.1769 18.4697 17.4698C18.1768 17.7626 18.1768 18.2375 18.4697 18.5304L19.5304 17.4698ZM22.4696 22.5304C22.7625 22.8233 23.2374 22.8233 23.5303 22.5304C23.8232 22.2375 23.8232 21.7626 23.5303 21.4697L22.4696 22.5304ZM18.4697 18.5304L22.4696 22.5304L23.5303 21.4697L19.5304 17.4698L18.4697 18.5304ZM11 18.25C6.44365 18.25 2.75 14.5563 2.75 10H1.25C1.25 15.3848 5.61522 19.75 11 19.75V18.25ZM19.25 10C19.25 14.5563 15.5563 18.25 11 18.25V19.75C16.3848 19.75 20.75 15.3848 20.75 10H19.25ZM11 1.75C15.5563 1.75 19.25 5.44365 19.25 10H20.75C20.75 4.61522 16.3848 0.25 11 0.25V1.75ZM11 0.25C5.61522 0.25 1.25 4.61522 1.25 10H2.75C2.75 5.44365 6.44365 1.75 11 1.75V0.25Z" fill={color || "#2D264B"} />
        </svg>

    )
}
export const CartIcon = ({ color, size }) => {
    return (
        <svg width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.7276 1.81808C1.62713 1.41624 1.21993 1.17193 0.818082 1.2724C0.416238 1.37287 0.171926 1.78007 0.272397 2.18192L1.7276 1.81808ZM5.76564 16.7854L6.21646 16.186L5.76564 16.7854ZM3.02129 10.2517L3.75064 10.0769L3.02129 10.2517ZM5.58574 16.6435L6.06354 16.0654L5.58574 16.6435ZM22.0192 10.7425L22.7485 10.9173L22.0192 10.7425ZM19.8897 16.3575L19.3643 15.8223L19.8897 16.3575ZM19.0404 17.0273L19.4384 17.663L19.0404 17.0273ZM21.9421 6.75597L22.4568 6.21052L21.9421 6.75597ZM22.3038 7.21465L22.9542 6.8412L22.3038 7.21465ZM14.0001 10.25C13.5859 10.25 13.2501 10.5858 13.2501 11C13.2501 11.4142 13.5859 11.75 14.0001 11.75V10.25ZM17.0001 13.25C16.5859 13.25 16.2501 13.5858 16.2501 14C16.2501 14.4142 16.5859 14.75 17.0001 14.75V13.25ZM2.05273 6.96053H18.445V5.46053H2.05273V6.96053ZM13.0837 17.0395H12.5791V18.5395H13.0837V17.0395ZM3.75064 10.0769L2.78208 6.03572L1.32339 6.38533L2.29195 10.4265L3.75064 10.0769ZM2.78034 6.02861L1.7276 1.81808L0.272397 2.18192L1.32513 6.39244L2.78034 6.02861ZM12.5791 17.0395C10.7352 17.0395 9.41662 17.0383 8.38995 16.919C7.38226 16.8019 6.738 16.5783 6.21646 16.186L5.31482 17.3848C6.12828 17.9966 7.06459 18.275 8.21679 18.4089C9.35001 18.5406 10.7706 18.5395 12.5791 18.5395V17.0395ZM2.29195 10.4265C2.71343 12.1852 3.04339 13.5669 3.43559 14.6383C3.83435 15.7275 4.32336 16.5731 5.10793 17.2216L6.06354 16.0654C5.56052 15.6496 5.19292 15.0752 4.84416 14.1226C4.48885 13.152 4.18038 11.87 3.75064 10.0769L2.29195 10.4265ZM6.21646 16.186C6.16457 16.147 6.11359 16.1067 6.06354 16.0654L5.10793 17.2216C5.17564 17.2775 5.24462 17.332 5.31482 17.3848L6.21646 16.186ZM13.0837 18.5395C14.6483 18.5395 15.8774 18.5404 16.8659 18.4404C17.8695 18.3389 18.6953 18.1283 19.4384 17.663L18.6424 16.3917C18.1682 16.6885 17.5955 16.859 16.715 16.948C15.8194 17.0386 14.6788 17.0395 13.0837 17.0395V18.5395ZM19.3643 15.8223C19.145 16.0376 18.9029 16.2285 18.6424 16.3917L19.4384 17.663C19.7909 17.4423 20.1184 17.184 20.4151 16.8927L19.3643 15.8223ZM18.445 6.96053C19.4375 6.96053 20.1131 6.96185 20.6157 7.02318C21.106 7.08301 21.3071 7.18794 21.4273 7.30143L22.4568 6.21052C21.9991 5.77856 21.4246 5.61076 20.7974 5.53423C20.1826 5.4592 19.3986 5.46053 18.445 5.46053V6.96053ZM22.7485 10.9173C22.9708 9.99004 23.1548 9.22794 23.2251 8.61254C23.2969 7.98475 23.2676 7.38698 22.9542 6.8412L21.6534 7.5881C21.7357 7.7315 21.7909 7.95145 21.7348 8.44219C21.6773 8.94532 21.5212 9.60257 21.2898 10.5677L22.7485 10.9173ZM21.4273 7.30143C21.5163 7.38541 21.5925 7.482 21.6534 7.5881L22.9542 6.8412C22.8202 6.60776 22.6526 6.39527 22.4568 6.21052L21.4273 7.30143ZM21.0001 13.25H17.0001V14.75H21.0001V13.25ZM21.9575 10.25L14.0001 10.25V11.75L21.9575 11.75V10.25ZM21.2898 10.5677C21.269 10.6548 21.2484 10.7405 21.2281 10.8251L22.6868 11.1749C22.7071 11.0903 22.7277 11.0044 22.7485 10.9173L21.2898 10.5677ZM21.2281 10.8251C20.9305 12.0658 20.699 13.0133 20.4566 13.7717L21.8855 14.2283C22.148 13.4067 22.3925 12.4015 22.6868 11.1749L21.2281 10.8251ZM20.4566 13.7717C20.1309 14.791 19.8104 15.3844 19.3643 15.8223L20.4151 16.8927C21.1139 16.2067 21.5286 15.3453 21.8855 14.2283L20.4566 13.7717ZM21.0001 14.75H21.1711V13.25H21.0001V14.75Z" fill={color || "#2D264B"} />
            <path d="M10.4737 20.9472C10.4737 21.5285 10.0024 21.9998 9.42104 21.9998C8.83969 21.9998 8.36841 21.5285 8.36841 20.9472C8.36841 20.3658 8.83969 19.8945 9.42104 19.8945C10.0024 19.8945 10.4737 20.3658 10.4737 20.9472Z" fill={color || "#2D264B"} />
            <path d="M16.7895 20.9472C16.7895 21.5285 16.3182 21.9998 15.7368 21.9998C15.1555 21.9998 14.6842 21.5285 14.6842 20.9472C14.6842 20.3658 15.1555 19.8945 15.7368 19.8945C16.3182 19.8945 16.7895 20.3658 16.7895 20.9472Z" fill={color || "#2D264B"} />
        </svg>

    )
}


export const CrossIcon = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke={color || "#2c3e50"} fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>

    )
}

export const AddIcon = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M12 20V12L12 4" stroke={color || 'white'} stroke-width="1.5" stroke-linecap="round" />
        </svg>

    )
}