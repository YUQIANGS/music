import styles from './index.less';
import {
   CloseOutlined
} from '@ant-design/icons';

const MenuTag = ({ children, onClick, onClose}) => {
    return (
        <div
            className={styles.tag}
            onClick={onClick}
        >
            {children}
            <CloseOutlined onClick={onClose} />
        </div>
    )
}

export default MenuTag;