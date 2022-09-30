import { Stylecontainer } from "./container.style"

const Container = ({ children }) => {
    return (
        <Stylecontainer>
            {children}
        </Stylecontainer>
    )
}

export default Container