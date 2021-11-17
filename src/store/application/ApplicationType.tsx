import React from 'react'
import { css } from '@emotion/react'
import myComputerIcon from '../../static/icons/my-computer-icon.png'
import myComputerSmIcon from '../../static/icons/my-computer-sm-icon.png'
import recycleBinEmptyIcon from '../../static/icons/recycle-bin-empty-icon.png'
import recycleBinEmptySmIcon from '../../static/icons/recycle-bin-empty-sm-icon.png'
import ieIcon from '../../static/icons/ie-icon.png'
import ieSmIcon from '../../static/icons/ie-sm-icon.png'
import notepadIcon from '../../static/icons/notepad-icon.png'
import notepadSmIcon from '../../static/icons/notepad-sm-icon.png'
import Notepad from '../../components/applications/Notepad/Notepad'

const dummyContent = (
  <div
    css={css`
      width: 200px;
      height: 100px;
    `}
  />
)

export class ApplicationType {
  static readonly All: ApplicationType[] = []

  constructor(
    readonly name: string,
    readonly content: React.ReactElement,
    readonly iconSrc: string,
    readonly smallIconSrc: string
  ) {
    ApplicationType.All.push(this)
  }

  static readonly MyComputer = new ApplicationType(
    'My Computer',
    dummyContent,
    myComputerIcon,
    myComputerSmIcon
  )

  static readonly RecycleBin = new ApplicationType(
    'Recycle Bin',
    dummyContent,
    recycleBinEmptyIcon,
    recycleBinEmptySmIcon
  )

  static readonly InternetExplorer = new ApplicationType(
    'Internet Explorer',
    dummyContent,
    ieIcon,
    ieSmIcon
  )

  static readonly Notepad = new ApplicationType(
    'Notepad',
    <Notepad />,
    notepadIcon,
    notepadSmIcon
  )
}
