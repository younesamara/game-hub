import {
    FaWindows,
    FaLinux,
    FaXbox,
    FaApple,
    FaPlaystation,
    FaAndroid
} from 'react-icons/fa';
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "../../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";


interface Props {
    platforms: Platform[]
}

function PlatformIconList({platforms}: Props) {

    const iconMap: { [key: string]: IconType } = {

        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe,
        linux: FaLinux,
        android: FaAndroid,

    }


    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon color="gray.500" key={platform.id} as={iconMap[platform.slug]}/>)}
        </HStack>

    );
}

export default PlatformIconList;
