interface Props {
	children?: React.ReactNode
}

export default function ({ children }: Props) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', flex: '0 1 auto', gap: '0.5rem' }} className='row'>{children}</div>
	)
}
