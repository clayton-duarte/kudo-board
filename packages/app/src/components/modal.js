
import React, { Component } from 'react';
import styled from 'styled-components';

import RootContext from '../context';

const Overlay = styled.aside`
pointer-events: ${props => props.visible ? 'auto' : 'none'};
background-color: ${props => props.theme.color.overlay};
transition: ${props => props.theme.transition.time};
opacity: ${props => props.visible ? 1 : 0};
justify-content: center;
align-items: center;
cursor: pointer;
position: fixed;
display: flex;
bottom: 0;
right: 0;
left: 0;
top: 0;
`

const StyledModal = styled.main`
background-color: ${props => props.theme.color.white};
border-radius: ${props => props.theme.shape.radius};
transition: ${props => props.theme.transition.time};
box-shadow: ${props => props.theme.shape.float};
padding: ${props => props.theme.shape.padding};
margin: ${props => props.theme.shape.margin};
top: ${props => props.visible ? 0 : 100}px;
position: relative;
cursor: default;
`;

const Wrapper = styled.div`
min-height: 20rem;
max-width: 25rem;
width: 100%;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeModal = () => {
      this.context.toContext({ modal: false });
    }
  }

  render () {
    const { children, ...rest } = this.props;
    const { modal } = this.context;
    return (
      <Overlay {...rest} onClick={this.closeModal} visible={modal}>
        <Wrapper onClick={e => e.stopPropagation()}>
          <StyledModal visible={modal}>
            {children}
          </StyledModal>
        </Wrapper>
      </Overlay>
    )
  }
}

Modal.contextType = RootContext;

export default Modal;
