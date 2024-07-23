export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to DataDefender AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          Hello! I&apos;m your DataDefender chatbot, here to help you learn
          about data protection. I provide tips and real-life examples to help
          keep your information safe, offering practical advice. If you have
          questions or want to know more about data security, just ask!
          Let&apos;s explore data protection together.
        </p>
      </div>
    </div>
  )
}
