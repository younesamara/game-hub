import {HStack, Image} from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import {ColorModeSwitch} from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";


interface Props {
    onSearch: (search: string) => void;
}

export function NavBar({onSearch}: Props) {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize='60px'/>
            <SearchInput onSearch={(onSearch)}/>
            <ColorModeSwitch/>
        </HStack>
    )

}

