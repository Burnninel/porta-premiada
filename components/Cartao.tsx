import styles from "../styles/Cartao.module.css"

interface CartoProps {
    bgcolor?: string
    children?: any
}

export default function Cartao(props: CartoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? "#fff"
            }}>
                {props.children}
              
        </div>
    )
}