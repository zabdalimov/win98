import React from 'react'

import { getFirstPathFromStackTrace } from '../../utils/error'

import { BlueScreen } from './BlueScreen'

interface Props {
  children?: React.ReactNode
}

interface State {
  error: Error | null
}

// For now there is only class based implementation for ErrorBoundaries in React unfortunately
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  render() {
    if (this.state.error) {
      const errorMessage = this.state.error.message
      const place = this.state.error.stack
        ? getFirstPathFromStackTrace(this.state.error.stack)
        : undefined
      // TODO add feature to continue working without refresh (continue on any key + add relevant text)
      // TODO refresh page shortcut based on OS
      const body = (
        <React.Fragment>
          Fatal exception &quot;{errorMessage}&quot; occurred
          {place ? ` ${place}` : ''}. Current application will be terminated.
          <ul>
            <li>
              Press CTRL + F5 to terminate the current application. You will
              lose any unsaved information in all applications.
            </li>
          </ul>
        </React.Fragment>
      )
      return <BlueScreen body={body} />
    }

    return this.props.children
  }
}
