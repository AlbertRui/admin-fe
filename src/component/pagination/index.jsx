/*
<<<<<<< HEAD
* @Author: Rosen
* @Date:   2017-02-28 11:40:05
* @Last Modified by:   Rosen
* @Last Modified time: 2017-02-28 11:55:19
*/

'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
=======
 * @Author: Rosen
 * @Date:   2017-02-28 11:40:05
 * @Last Modified by:   Rosen
 * @Last Modified time: 2017-02-28 11:55:19
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27

import RcPagination from 'rc-pagination';

import './index.scss';

// 通用分页组件
const Pagination = React.createClass({
    getInitialState() {
        return {
<<<<<<< HEAD
            
        };
    },
    render() {
        return (
            <RcPagination {...this.props}/>
        )           
=======

        };
    },
    render() {
        return ( 
            <RcPagination { ...this.props}/>
        )
>>>>>>> 9b63b1bca6de15b8614e2242163a2226cb7c6f27
    }
});

export default Pagination;