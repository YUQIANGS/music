import Tag from '@/components/menuTag';
import { connect } from 'dva';
import { history } from 'umi';

const TagGroup = ({ tagList, dispatch }) => {
    const hadnleClose = (e, item) => {
        e.preventDefault();
        dispatch({
            type: 'account/delMenuTag',
            payload: item
        })
    }
    const handleClick = (item) => {
        history.push(item.path)
    }
    return(
        <>
            {
                tagList.map(item => {
                    return (
                    <Tag 
                        key={item.id}
                        data={item}
                        closable 
                        onClose={(e) => { hadnleClose(e, item) }}
                        onClick={() => { handleClick(item) }}
                    >
                        {item.title}
                    </Tag>
                    )
                })
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        tagList: state.account.menuTagList
    }
}

export default connect(mapStateToProps)(TagGroup);